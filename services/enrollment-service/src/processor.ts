// ------------------------------------------------------------
// src/processor.ts
import dotenv from 'dotenv';
dotenv.config();

import { getChannel } from './utils/rabbitmq';
import EnrollmentModel from './models/enrollment.model';

const QUEUE = 'enroll_queue';

(async () => {
    const ch = await getChannel();
    await ch.assertQueue(QUEUE, { durable: true });

    ch.consume(QUEUE, async msg => {
        if (!msg) return;
        const { enrollmentId } = JSON.parse(msg.content.toString());

        try {
            await EnrollmentModel.findByIdAndUpdate(enrollmentId, {
                status: 'completed',
                progress: 100
            });
        } catch (err) {
            console.error('Processor error:', err);
            await EnrollmentModel.findByIdAndUpdate(enrollmentId, { status: 'failed' });
        } finally {
            ch.ack(msg);
        }
    });

    console.log(`Enrollment processor listening on "${QUEUE}"`);
})();