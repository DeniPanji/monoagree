/* eslint-disable no-console */
/* eslint-disable no-undef */
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'agreeculture-market',
  brokers: ['localhost:9092', 'localhost:9092']
});

const consumer = kafka.consumer({ groupId:'kafka' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'offer' });

  await consumer.run({
    eachMessage: async ({partition, message}) => {
      console.log({
        partition,
        offset: message.offset,
        message: message.value.toString()
      });
    }
  });
};

module.exports = run;
