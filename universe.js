const fetchingData =async()=>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data.tools);
    showingData(data.data.tools);
}

const showingData=(dataInfos)=>{
    // console.log(dataInfos);
    
    const cardContainer = document.getElementById('card-container');
    for(const dataInfo of dataInfos){
        const{image, features, name, id} = dataInfo;
        // console.log(dataInfo);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
            <div class="card shadow-lg p-3 bg-body rounded">
                <img src="${image}" class="card-img-top" alt="...">
                <h5 class="mt-3 fs-4 fw-bold">Features</h5>
                <div class="card-body">
                  <p>1. ${features[0]}</p>
                  <p>2. ${features[1]}</p>
                  <p>3. ${features[2]}</p>
                </div>
                <hr class="border-secondary border-1 mb-4">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title fs-4 fw-bold">${name}</h5>
                    <button onclick="checkAll('${id}')" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#infoModal">
                        Check Details
                    </button>
                </div>
            </div>
        `;
        cardContainer.appendChild(cardDiv);
    }
}

const checkAll=async(id)=>{
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data);
    displayInModal(data.data);
    
}

const displayInModal=(details)=>{
    console.log(details);
    const{image_link, description} = details;
    const infoModalLabel = document.getElementById('infoModalLabel');
    infoModalLabel.innerText = details.tool_name;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
         <img src="${image_link[0]}" class="card-img-top" alt="...">
          <p>"${description}"</p>
    `;
}


fetchingData();