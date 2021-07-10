var disp_btn = document.getElementById('display') 
var sub_button = document.getElementById('sub_btn')
var srch_btn = document.getElementById('search_btn')
var delete_src_btn = document.getElementById('delete_search')
var clear_button = document.getElementById('clear')
var container = document.getElementById("output")
var delete_container = document.getElementById('delete')
var message = document.getElementById("message")
var id_count = 8  
var clicked_disp = false


var data =[
    {
        id:1,
        name:'Asiatic Lion',
        type:'Mammal',
        population:674,
        habitat:"Gujarat"
        
    },
    {
        id:2,
        name:'Bengal Tiger',
        type:'Mammal',
        population:2000,
        habitat:'West Bengal'
    },
    {
        id:3,
        name:'Snow Leopard',
        type:'Mammal',
        population:450,
        habitat:"Uttarakhand,Sikkim,Arunachal Pradesh"
    },

    {
        id:4,
        name:'Himalayan Quail',
        type:'Bird',
        population:50,
        habitat:'Uttarakhand'
    },
    {
        id:5,
        name:'Bengal Florican',
        type:'Bird',
        population:900,
        habitat:"Uttar Pradesh,Assam,Arunachal Pradesh"
    },
    {
        id:6,
        name:'Amboli Bush Frog',
        type:'Amphibian',
        population:450,
        habitat:"Maharashtra,Karnataka"
    },
    {
        id:7,
        name:'Chinese Pangolin',
        type:'Mammal',
        population:80,
        habitat:"Assam,Sikkim,Meghalaya"
    },

]


sub_button.addEventListener('click',()=>{ //for new entries

    var name = document.getElementById('name')
    var type = document.getElementById('type')
    var pop = document.getElementById('population')
    var hab = document.getElementById('habitat')
    var temp ={
        id:id_count,
        name: name.value,
        type:type.value,
        population: pop.value,
        habitat:hab.value
    }
    id_count+=1
    data.push(temp)
    message.innerHTML="Entry made"
    name.value=""
    type.value=""
    pop.value=""
    hab.value=""


})


disp_btn.addEventListener('click',()=>   // for displaying all contents
        {  
            
            if(clicked_disp)
            {
                container.innerHTML=""
            }
            var tbl = document.createElement("table");
            var tblBody = document.createElement("tbody");
            for(var i =0;i<=data.length;i++)
            {
                var row = document.createElement("tr");
                
                for(var j =0;j<5;j++)
                {
                    var cell = document.createElement("td");
                    var cellText
                    var placeholder
                    if(i==0)
                        {
                            switch(j)
                            {
                                case 0:placeholder="Id"
                                    break
                                
                                    case 1:placeholder="Name"
                                    break

                                    case 2:placeholder="Type"
                                    break

                                    case 3:placeholder = "Population"
                                    break

                                    case 4:placeholder = "Habitat"
                                    break

                                   
                            }
                            cellText = document.createTextNode(placeholder);

                        
                        }
                    else 
                    {
                    switch(j)
                    {
                        case 0:placeholder= data[i-1].id
                            break
                        
                            case 1:placeholder= data[i-1].name
                            break

                            case 2:placeholder=data[i-1].type
                            break

                            case 3:placeholder= data[i-1].population
                            break

                            case 4:placeholder= data[i-1].habitat
                            break

                            
                                   
                    }
                    cellText = document.createTextNode(placeholder);
                    }
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }

                tblBody.appendChild(row);
            }
            tbl.appendChild(tblBody);
            container.appendChild(tbl);
            tbl.setAttribute("border", "2");
            clicked_disp = true
        })


clear_button.addEventListener('click',()=>    // for clearing the table
    {
      
        container.innerHTML=""
    
      
    })


srch_btn.addEventListener('click',()=>{                       //for searching for a specific value
    var found = false
    var search_field = document.getElementById('search').value
    console.log(search_field)
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    if(clicked_disp)container.innerHTML=""
    for(var i =0;i<data.length;i++)
            {
                var row = document.createElement("tr");
                if(data[i].name==search_field)
                {
                    for(var j =0;j<5;j++)
                {
                    var cell = document.createElement("td");
                    var cellText
                    
                    var placeholder
                    
                    
                    switch(j)
                    {
                        case 0:placeholder= data[i].id
                            break
                        
                            case 1:placeholder= data[i].name
                            break

                            case 2:placeholder=data[i].type
                            break

                            case 3:placeholder= data[i].population
                            break

                            case 4:placeholder= data[i].habitat
                            break

                           
                    }
                    cellText = document.createTextNode(placeholder);
                    
                    
                    cell.appendChild(cellText)
                    row.appendChild(cell)
                }

                tblBody.appendChild(row);
                tbl.appendChild(tblBody)
                container.appendChild(tbl)
                tbl.setAttribute("border", "2");
                
                clicked_disp=true
                found=true
                }
                
            }
    //console.log(found)
    if(!found)container.innerText="No results found"
})


delete_src_btn.addEventListener('click',()=>{                       //for deleting

    var found = false
    var index
    var search_field=document.getElementById('delete_find')
    for(let i =0;i<data.length;i++)
    {
        if(search_field.value==data[i].id)
        {
            found = true
            index=i
            break
        }
    }

    if(!found)
    {
        delete_container.innerHTML = "Not found"
        search_field.value=""

    }

    else
    {
        data.splice(index,1)
        delete_container.innerHTML="Record with id = "+search_field.value+" deleted" 
        search_field.value=""   
    }


})