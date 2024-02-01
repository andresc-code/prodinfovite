import "./App.css";
import {useEffect, useState } from "react";
import Menu from "./Menu";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";//import ReactPaginate from "react-paginate";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Navigation from "./Navigation/NavMenu";
import CardProduct from "./CardProduct";
function App() {

  //New query##############################################
    const baseURL = 'https://json-server-vercel-vert-nine.vercel.app/product';
    const urlMenu = 'https://json-server-vercel-vert-nine.vercel.app/menu';
    const [products, setProducts] = useState([]);
    const [menuData, setMenuData] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [query, setQuery] = useState("");
    const [family, setFamily] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const limit = 12;
  
    /*useEffect(() => {
      console.log("USEEFEFECT INICIO entra al usefetch");
      const fetchData = async () => {
          try {
            //const response = await fetch(`${baseURL}?_page=1&_limit=${limit}`);
            const response = await fetch(`${baseURL}?_page=1&_limit=${limit}`);
            if (!response.ok) { throw new Error('Network response was not ok.'); }
            const data = await response.json();
            setPageCount(Math.ceil(data.length / limit)); 
            setProducts(data);
            setFilterProducts(data);
          } catch (error) {
            console.error('There was a problem fetching the data:', error);
            // Aquí puedes manejar el error, ya sea mostrando un mensaje al usuario o realizando alguna otra acción.
         }   
      };
      fetchData();
      
    }, [limit]);*/

    //Load initial OK
    useEffect(() => {
      const getInitialData = async () => {
        try {
          let url = `${baseURL}?_page=1&_limit=${limit}`;
          //const res = await fetch(`${baseURL}?_page=1&_limit=${limit}&family=${family}`);
          const res = await fetch(url);
          const data = await res.json();
          const total = res.headers.get("x-total-count");
          setPageCount(Math.ceil(total / limit));
          setProducts(data);
          setFilterProducts(data);
          const resMenu = await fetch(urlMenu);
          const dataMenu = await resMenu.json();
          setMenuData(dataMenu);
        } catch (error) {
          console.error("Error fetching initial data:", error);
        }
      };
      getInitialData();
    }, [limit]);
    //################################

    const fetchData = async (currentPage) => {
      try {
        let tmpData;
        let url = `${baseURL}?_page=${currentPage}&_limit=${limit}`;
        //const res = await fetch(`${baseURL}?_page=1&_limit=${limit}&family=${family}`);
        const res = await fetch(url);
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        tmpData=data;
        
        setPageCount(Math.ceil(total / limit));
        console.log('CurrentPage:',currentPage,'data que se va actualizar',tmpData,'Pag:',Math.ceil(total / limit))
        setProducts(tmpData);
        setFilterProducts(tmpData);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };


    
    // ----------- Input Filter -----------
  
    
    const handleFamilyChange = async (selectedFamily) => {
      setFamily(selectedFamily); 
      // Actualiza 'family' con el valor clicado
      await fetchData(1, selectedFamily); // Llama a fetchData con el nuevo valor de 'family'
    };

    const handleChangeSearch = async (e) => {
      if(e.target.value.length > 0) {
        const currentSearch = e.target.value;
        setSearch(currentSearch);
        //setSearch(e.target.value);
        console.log("value input", currentSearch, "family", family);
        await fetchData(1, family, currentSearch); 
      }
    }
  
    const handleInputChange = (event) => {     
      const queryFilter=(event.target.value);
      setQuery(event.target.value);
      if (queryFilter){
        if (typeof handleInputChange.timerId !== 'undefined') {
          clearTimeout(handleInputChange.timerId);
        }
        handleInputChange.timerId = setTimeout(() => {
          fetchDataFilter(products, selectedCategory, queryFilter);
          console.log("solo aqui se ejeucta el buscar")
        }, 1000);
        console.log('queryfilter:',queryFilter,'setquery',event.target.value)
      }else{
        //setProducts(data);
        fetchData(1);
        console.log('nada en query')
      }

      

      //fetchDataFilter(products, selectedCategory, queryFilter);  
    };

     
    const filteredItems = products.filter(
      (product) => product.Description.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  
    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    // ------------ Button Filtering -----------
    const handleClick = (event) => {
      setSelectedCategory(event.target.value);
    };
    const handlePageClick = async (data) => {
      const currentPage = data.selected + 1;
      await fetchData(currentPage);
    };
    
    const pageCurrent= (products)=>{
      
      console.log("pagina actual en funcion ",Math.ceil(products.length / limit))
    }
   //######################################## filter data
   const fetchDataFilter = async (products, selected, query) => {
    try {
      let filteredProducts = products;
        
      // Filtering Input Items
      if (query) { 
        filteredProducts = filteredItems; 
        setFilterProducts(filteredProducts)
      }
      
      // Applying selected filter
      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ family, color, brand, newPrice, name }) =>
            family === selected ||
            color === selected ||
            brand === selected ||
            newPrice === selected ||
            name === selected
      );}  
      setPageCount(Math.ceil(filteredProducts.length / limit));
      console.error("paginas totales dentro de la func filter:", pageCount);
    } catch (error) {
      console.error("Error fetchData data:", error);
    }
  };    
      
    return (
      <>    
        <div>
        <Navbar/>
        <Navigation 
          menuDataInput={menuData}
          query={query}
          handleInputChange={handleInputChange}
          onFamilyChange={handleFamilyChange} />
        </div>
       <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
       <div className="row m-2">
        {filterProducts.map((item) => {
          return (
            <div key={item.Code} className="col-sm-6 col-md-3">
              <CardProduct
                key={item.Code}
                img={item.Image}
                title={item.Description}
                code={item.Code}
                reference={item.Reference}
                brand={item.Brand}
                family={item.Category}
                line={item.Style}
                prevPrice={item.Price}
                newPrice={item.Price}
              ></CardProduct>
            
            </div>
          );
        })}
      </div>
       
       
      </>
    );
  }
  
  export default App;
  