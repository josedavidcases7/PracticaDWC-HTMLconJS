let jsonData = null;

async function requestAyaxParams(ruta, params) {
    await $.ajax({
        method: "POST",
        url: ruta,
        data: params,
        success: function (data) {
            jsonData = JSON.parse(data);
        }
    });
    return jsonData;
}

async function requestAyaxBody(ruta, cuerpo){
    return await fetch(ruta, {
      method: 'POST',
      body: cuerpo
    })
    .then(response => response.text())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

async function obtenerListaJson(route, params) {
    const response = await requestAyaxParams(route, params);
    return createListObjects(response);
}

async function obtenerObjetoJson(route, params) {
    const response = await requestAyaxParams(route, params);
    return response;
}

function createListObjects(response) {
    let objects = [];
    if(response == null)
    {   
        return objects;
    }
    if(response.length == 0)
    {
        return response;
    }

    if (response.result !== undefined) {
      objects[0] = response.result;
    } else {
      let respuestaNumerica = Number(response);
      if (isNaN(respuestaNumerica)) {
        response.forEach(x => {
          objects[objects.length] = x;
        });
      } else {
        return respuestaNumerica;
      }
    }
    return objects;
}