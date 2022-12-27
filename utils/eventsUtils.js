import { getDb } from "/connection/connect"

export const newEvent = async (eventName, data) => {

    const db = await getDb();

    await db.collection("events").insertOne({
        name: eventName,
        data: data
    });

}
