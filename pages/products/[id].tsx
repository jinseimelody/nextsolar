import Link from 'next/link';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app'

const ProductDetail: NextPageWithLayout = () => {
    return (
        <>
            <h3>Hi, this is detail page</h3>
            <div>
                <Link href="/products">back to product list</Link>
            </div>
        </>
    )
}

ProductDetail.getLayout = (page: ReactElement) => {
    return (
        <>
            <div>My delicate layout {page}</div>
        </>
    )
}


export default ProductDetail;