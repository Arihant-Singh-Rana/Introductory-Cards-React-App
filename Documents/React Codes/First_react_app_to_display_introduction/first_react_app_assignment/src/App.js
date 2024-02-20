import "./App.css";
import Introduction from "./Introduction";
import Abhijeet from "./material/Abhijeet.jpeg";
import Adnan from "./material/Adnan.jpeg";
import Sharad from "./material/Sharad.jpg";
import Tiwari from "./material/Tiwari.jpg";
import keshav from "./material/Keshav.jpeg";
import DK from "./material/DK.jpeg";
function App() {
  return (
    <>
      <div class="Body">
        <Introduction
          imgaddress={Abhijeet}
          name="Abhijeet Khokar"
          age={18}
          course="B.Tech CSE"
        />
        <Introduction
          imgaddress={Adnan}
          name="Adnan Khan"
          age={18}
          course="B.Tech CSE"
        />
        <Introduction
          imgaddress={Sharad}
          name="Sharad Singh Kushwaha"
          age={18}
          course="B.Tech CSE"
        />
      </div>
      <div className="Body">
        <Introduction
          imgaddress={Tiwari}
          name="Aditya Kumar Tiwari"
          age={18}
          course="B.Tech CSE"
        />
        <Introduction
          imgaddress={keshav}
          name="Keshav Agarwal"
          age={18}
          course="B.Tech CSE(AI/ML)"
        />
        <Introduction
          imgaddress={DK}
          name="Dinesh Sharma"
          age={18}
          course="B.Tech CSE(AI/ML)"
        />
      </div>
    </>
  );
}

export default App;


