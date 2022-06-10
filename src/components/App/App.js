import Random from '../Random/Random';
import { useState } from 'react'
import axiox from 'axios'
import FoodInfo from '../FoodInfo/FoodInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


//<======= What todo in this app ========>
//1. Work on Get Random Recipies api 
//2. we need id, title, servings, sourceUrl, opeLicense, image, imageType, instructions
//3. Search menu Items by using a search button

function App() {
  const [random, setRandom] = useState([]);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([{}])

  const handleClick = async () => {
    const baseUrl = 'https://api.spoonacular.com/recipes/random'
    const apiKey = '?apiKey=' + process.env.REACT_APP_API_KEY;
    const random = await axiox.get(baseUrl + apiKey)
    console.log(random.data.recipes[0].title)
    setRandom(random.data.recipes[0])
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const baseUrl = 'https://api.spoonacular.com/food/menuItems/search'
    const apiKey = '?apiKey=' + process.env.REACT_APP_API_KEY
    const query = '&query=' + search
    const resultF = await axiox.get(baseUrl + apiKey + query)
    setResult(resultF.data.menuItems)
  }

  return (

    <Container className='text-secondary'>
      <Row>
        <Col className="text-uppercase fw-light text-center mb-5 mt-3"><h1>JJT Foods</h1>
        </Col>
      </Row>
      <Row>
        <Col> <Button type='submit' onClick={handleClick} variant="outline-secondary" className='mb-3 align-center'> Check for Random Recipe  </Button></Col>
        <Col><div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleChange} className='form-control mb-3' required/>
            <Button type='submit' variant="outline-secondary" className='mb-3'>Check Menu</Button>
          </form>
        </div>
        </Col>
      </Row>
      <Row>
        <Col> <Random random={random} /></Col>
        <Col> <div className='container'>
          {result.map(item => <FoodInfo item={item} />)}
        </div></Col>
      </Row>
    </Container>
  );
}

export default App;