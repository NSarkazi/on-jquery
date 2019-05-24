import jquery from 'jquery';

export const getData = (callback) => jquery.ajax({
  url: "http://localhost:3012/List",
  type: "GET",
  dataType: 'json',
  ContentType: 'application/json',
  success: function (data) {
    console.log("data",data);
      callback({data: data});
  }.bind(this),
  error: function (jqXHR) {
      console.log(jqXHR);
  }
})

export const addRow = (name, surname, company, callback) => jquery.ajax ({
  url: "http://localhost:3012/List",
  type: "POST",
  data: {name, surname, company},
  success: (data) => callback({data})    
});  

export const deleteRow = (id, callback) =>  jquery.ajax({
  url: `http://localhost:3012/List/${id}`,
  type: 'DELETE',
  success: (data) => {
  callback({data});
  }
});


export const editRow = (id, name, surname, company, callback) => {
  jquery.ajax({
  url: `http://localhost:3012/List/${id}`,                         
  type: 'PUT',
  data: {name, surname, company},
  success: (data) => {
    alert( "обновление: " + data );
    callback({data});
  } 
  })
}