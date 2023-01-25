import Add from "../pages/Add";
import Home from "../pages/Home";


const { default: Mainroot } = require("../companents/Mainroot");
const { default: Aboutus } = require("../pages/Aboutus");
const { default: Contacts } = require("../pages/Contacts");
const { default: Portfolio } = require("../pages/Portfolio");
const { default: Pricing } = require("../pages/Pricing");

   export const ROUTES=[


    {
        path:"/",
        element:<Mainroot/>,
        children:[
{
    path:"",
    element:<Home/>
},
{
    path:"about",
    element:<Aboutus/>
},
{
    path:"contacts",
    element:<Contacts/>
},
{
    path:"portfolio",
    element:<Portfolio/>
},
{
    path:"pricing",
    element:<Pricing/>
},
{
    path:"add",
    element:<Add/>
}

        ]
    }
]