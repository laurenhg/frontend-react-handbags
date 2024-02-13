import './App.css'
import Button from "./components/Button.jsx";
import "./components/Button.css"
import Product from "./components/Product.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import "./components/Product.css"
import Tile from "./components/Tile.jsx"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"
import "./components/Tile.css"
import Wrapper from "./components/Wrapper.jsx";



function App() {
    const handleClick = (buttonText)=> {
        console.log(buttonText);
    }
    return (
        <div>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button text="to the collection" onClick={()=> handleClick('to the collection')} />
                <Button text="shop all bags" onClick={() => handleClick('shop all bags')}/>
                <Button text="pre-order" onClick={()=> handleClick('pre-order')} disabled />
            </nav>
            <main>
                <Product
                    spanText="Best Seller"
                    imageSrc={bag1}
                    productName="The handy bag"
                    price="€400"
                />
                <Product
                    spanText="Best Seller"
                    imageSrc={bag2}
                    productName="The stylish bag"
                    price="€400"
                />
                <Product
                    spanText="Best Seller"
                    imageSrc={bag3}
                    productName="The simple bag"
                    price="€400"
                />
                <Product
                    spanText="Best Seller"
                    imageSrc={bag4}
                    productName="The trendy bag"
                    price="€400"
                />
            </main>
            <footer>
                <Wrapper>

                <Tile
                    image={brand}
                />


                <Tile
                    title="the brand"
                    paragraph=" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />


                <Tile
                    image={story}
                />


                <Tile
                    title="our story"
                    paragraph=" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                </Wrapper>
            </footer>
        </div>
    )
}

export default App