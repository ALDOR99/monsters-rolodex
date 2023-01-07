import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//--------------------------------------------------------------------

class App extends Component {
  //------------------------------------------------------------------------------------------------------------------

  constructor() {
    //inşaatçi // yapıcı metod
    super();
    this.state = {
      monsters: [],
    };
  }

  //------------------------------------------------------------------------------------------------------------------

  componentDidMount() {
    //[yaşam döngüsü yöntemi  = lifecycle method]

    fetch("https://jsonplaceholder.typicode.com/users") //Jsonu alıyorum ,[ fetch = gidip getirmek ]
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  //------------------------------------------------------------------------------------------------------------------

  render() {
    // Render ne gösterileceğini belirler. Kullanıcının arayüzünün ne olacağını belirler.
    return (
      <div className="App">
        {
          //dizi yönetimi "map" = dizinin içinde,soldan sağa doğru her bir öğe üzerinde,
          //yineleme yapmamızı sağlayan bir yöntemdir.Ve size yeni bir dizi ,geriye verir.
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            ); //monster parametresini geriye return et, h etiketi içerisinde
          })
        }
      </div>
    );
  }
}

//--------------------------------------------------------------------
export default App;
