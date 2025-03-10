import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import search from '../img/search.svg'
import '../css/CreateOrder.css'
import ProductList from './ProductList';
export default function(){
    return(<>
        <Header />
        <Navbar />
        <span id='main-body'>
            <div id='title-bar'>
                <h2 id='title'>Create Order</h2>
                <input id='search' type='text' />
            </div>
            <div id='headings-bar'>
                <h2 id='product-type'>Product Types</h2>
                <h2 id='quantity'>Quantity</h2>
                <h2 id='wash-type'>Wash Type</h2>
                <h2 id='price'>Price</h2>
            </div>
            <ProductList />
        </span>
        <Footer />
    </>)
}

//note, my createOrder component was made without header/footer /navbar, hence i'll be adjusting the css part for it accordingly