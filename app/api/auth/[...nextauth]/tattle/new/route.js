import { connnectToDB } from '@utils/database'
import Tattle from '@models/tattle'
export const POST = async (req) => {
    const { userId, tattle, tag } = await req.json();


    try {
        await connnectToDB();
        const newTattle = new Tattle({
            creator: userId, 
            tattle,
            tag
        })

        await newTattle.save();

        return new Response(JSON.stringify(newTattle), { status: 201 })

    } catch (error) {

    }
}