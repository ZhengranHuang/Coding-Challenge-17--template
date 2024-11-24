const Tourlist = document.getElementById('Tour List');
const errorMessage = document.getElementById('error-message');
async function fetchTour() {
    try {
        //Fetch tour data from the API and display it dynamically.
      const response = await fetch('https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch information from the server');
      }
      return response.json();
    } catch (error) {
      errorMessage.textContent = error.message;
    } finally {
      console.log('Fetch operation completed');
    }}
    //Use the  function to render a list of tours.
    function displayTour(tours) {
        tickets.map(tour => {
          const { id, name, information, price } = tour;      

      const TourElement = document.createElement('div');
      TourElement.Tourlist.add('TourList');
      TourElement.innerHTML = `
    ]<img src="${image[0].url}">
        <h3>TOUR ID: ${id}</h3>
        <p>TOUR: ${name}</p>
        <p>Information:${information}</p>
        <p>Price: $${(price)}</p>
        <p>
        <button onClick={() => {}}>Read More / Show Less</button>
        </p>
        <p>
        <button onClick={() => removeTour(tour.id)}>Not Interested</button>
        </p>
      `;
      Tourlist.appendChild(TourElement);
    });
  }
  fetchTour();

  export default Gallery