import { useState } from "react";
import { Desain } from "@prisma/client";

type data =  {
   name: "",
   email: "",
}

function App() {
   const [formValues, setFormValues] = useState<Desain>({} as Desain);
   const handleChange = (e:any) => {
      setFormValues({ ...formValues, [e.target.id]: e.target.value });
   };
   const handleSubmit = (e:any) => {
      e.preventDefault();
      console.log(formValues);
   };
   return (
      <div className="App">
         <form onSubmit={handleSubmit}>
            <div className="input-group">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  id="name"
                  value={formValues.name || ""}
                  onChange={handleChange}
               />
            </div>
            <div className="input-group">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  id="email"
                  value={formValues.email || ""}
                  onChange={handleChange}
               />
            </div>
            <button type="submit" className="submit-btn">
               Submit
            </button>
         </form>
      </div>
   );
}
export default App;
