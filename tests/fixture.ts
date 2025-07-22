import {test as base} from'@playwright/test'
 
type MyFixture ={ //MyFixtue is a user defined datatype so we can give any name
    helloWord:any
}
 
export const test = base.extend<MyFixture>({
    helloWord:async ({},use:any)=>{
        console.log("Where is my tea");
        await use();
   
    greatDay:async({},use:any)=>{
        const myday ="Have a great day";
        await use();
    }
    }
})