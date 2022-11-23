import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '../../utils/cookie'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    setCookie(res, 'Next.js', 'api-middleware!', { path: '/', maxAge: 2592000 });
    console.log(Object.getOwnPropertyNames(res).filter(key => typeof (res as any)[key] === 'function'));
    res.end(res.getHeader('Set-Cookie'));
}

export default handler;