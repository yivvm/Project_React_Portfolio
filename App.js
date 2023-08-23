/* ------------------- orginial npm start --------------------- */
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


/* ------------------- week 1 transforming lists in JS --------------------- */
/*
const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50",
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
  },
];

const topDesserts = data.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.desription}`,
    price: dessert.price,
  }
})

export default function App() {
  console.log(topDesserts);
  return <h1>Examine the console output</h1>;
}
*/


/* ------------------- week 1 render a simple list component --------------------- */
/*
import './index.css';

const topDesserts = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50",
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
  },
];

function App() {
  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default App;
*/


/* ------------------- week 1 Lab: create a basic list component --------------------- */
/*
import "./App.css";
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;
*/


/* ------------------- week 1 using Keys within list components --------------------- */
/*
import './index.css';
import {useState} from 'react';

const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00',
  }, {
    id: 'todo2',
    createdAt: '20:30',
  }]);

  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());
  }

  // First example with keys, show browser console to see the warning.
  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
*/


/* ------------------- week 1 creating a form component in React --------------------- */
/*
import { useState } from "react";   
import './App.css';

function App() {
  const [name, setName] = useState("")

  const handleSumbit = (e) => {
    e.preventDefault();
    setName("");
    console.log('Form submitted!')
  }

  return (
    <div className="App">
      <form onSubmit={handleSumbit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input 
              type="type" 
              placeholder="Name" 
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="sumbit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
*/


/* ------------------- week 1 Lab: create a registration form --------------------- */
/*
import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role != "role"
    );
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
*/


/* ------------------- week 1 what is context, and why is it used --------------------- */
/*
import './App.css';
import { UserProvider, useUser } from './UserContext';

const LoggedInUser = () => {
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>What is Little Lemon?</h2>
      <p>
        Little Lemon is an Italian restaurant located in the downtown Chicago.
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;
*/


/* ------------------- week 2 revising useState hook --------------------- */
/*
import {useState} from 'react';

export default function App() {
  // const restaurantName = useState("Lemon");
  // console.log(restaurantName);
  // return null;

  const [restaurantName, setRestaurantName] = useState("Lemon");

  function updateRestaurantName() {
    setRestaurantName("Little Lemon")
  };

  return (
    <div>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>
        Update restaurant name
      </button>
    </div>
  );
};
*/


/* ------------------- week 2 using the useState hook: Goal Form --------------------- */
/*
import React from "react";

function GoalForm(props) {
  const [formData, setFormData] = React.useState({goal: "", by: ""});

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: ""});
  };

  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
        <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  const [allGoals, updateAllGoals] = React.useState([]);

  function addGoal(goal) { updateAllGoals([...allGoals, goal]); }

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  )
}
*/


/* ------------------- week 2 Lab: managin state within a component --------------------- */
/*
import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card.",
      }
    })
  };

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
*/


/* ------------------- week 2 using the useEffect hook --------------------- */
/*
import React from "react";
import './App.css';

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  React.useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  }
  // document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"}, []
  )

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle massage
      </button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  )
}

export default App;
*/


/* ------------------- week 2 data fetching using hooks --------------------- */
/*
import { useState, useEffect } from 'react';

export default function App() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch('http://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  );
}
*/


/* ------------------- week 2 Lab: can you fetch data? --------------------- */
/*
import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name:{user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt=""/>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
*/


/* ------------------- week 2 what is useReducer and how is differs from useState, track expenses --------------------- */
/*
import {useReducer} from 'react';
import './App.css';

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return {money: state.money - 10};
  if (action.type === 'sell_a_meal') return {money: state.money + 10};
  if (action.type === 'celebrity_visit') return {money: state.money + 5000};
  return state;
}

function App () {

  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shopping for veggies!</button>
        <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer</button>
        <button onClick={() => dispatch({type: 'celebrity_visit'})}>Celebrity visit!</button>
      </div>
    </div>
  )
}

export default App;
*/


/* ------------------- week 2 useRef to access underlying DOM --------------------- */
/*
import React from 'react';
import './App.css';

function App() {
  const formInputRef = React.useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  }

  return (
    <>
      <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text"/>
      <button onClick={focusInput}>
        Focus input
      </button>
    </>
  );
}

export default App;
*/


/* ------------------- week 2 Lab: create your own custom hook, usePrevious --------------------- */
/*
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}
*/


/* ------------------- week 3 component composition with children --------------------- */
/*
import './App.css';

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor={"red"}>Delete</Button>
};

function App() {
  return (
    <div className="App">
      <header>Little Lemon Restaurant</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>
          Are you sure you want to proceed? You will miss all your delicous recipes!
        </p>
      </Alert>
    </div>
  );
}

export default App;
*/


/* ------------------- week 3 manipulating children dynamically in JSX--------------------- */
/*
import * as React from 'react';
import './App.css';

const Row = ({ children, spacing }) => {
  
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle: {})
          }
        });
      })}
    </div>
  );
};

function LiveOrder() {
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default LiveOrder;
*/


/* ------------------- week 3 Lab: build a radio group component--------------------- */
/*
import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
*/


/* ------------------- week 3 spread attributes --------------------- */
/*
import './App.css';

const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => {
        alert("Logging in!");
      }}
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
        Sign up
      </Button>
      <LoginButton type="secondary" onClick={() => alert("Signing up!")}>
        Login
      </LoginButton>
    </div>
  );
}

export default App;
*/


/* ------------------- week 3 create a HOC for cursor position --------------------- */
/*
import './App.css';
import {useState, useEffect} from 'react';

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      }
    }, []);

    return <WrappedComponent {...props} />
  }
}

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PanelMouseLogger);

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
*/


/* ------------------- week 3 render props --------------------- */
/*
import './App.css';
import { useState, useEffect } from 'react';

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie", "tiramisu"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher 
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher 
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <DessertsCount />
      <DrinksCount />
    </div>
  )
}

export default App;
*/


/* ------------------- week 3 Lab: implementing scroller position with render props --------------------- */
/*
import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render({ mousePosition });
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>  
        )}
      />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
*/


/* ------------------- week 3 why react testing library --------------------- */
/*
import './App.css';
function App() {
  return (
    <div className="App">
      <a href="https://littlelemon.com" className="App-link">
        Little Orange Restaurant
      </a>
    </div>
  )
}

export default App;
*/



/* ------------------- week 3 writing the first test for your form --------------------- */
import './App.css';
import FeedbackForm from './FeedbackForm';

function App() {
  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;