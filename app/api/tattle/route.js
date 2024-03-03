import { connectToDB } from '@utils/database'
import Tattle from '@models/tattle'

export const GET = async (req) => {
    try {
        await connectToDB();
        const tattles = await Tattle.find({}).populate('creator');
        return new Response(JSON.stringify(tattles, {status: 200}));
    } catch (error) {
        return new Response("Failed to fetch tattles", {status: 500});
    }
}
