import L from "leaflet";
import { useEffect } from 'react';

function Legend({ map, getColor, grades }) {
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomright" });
      legend.onAdd = () => {
        let wrapper = L.DomUtil.create('div', 'info legend');

        wrapper.style.background = "#252525";
        wrapper.style.color = "#F7F7F7";
        wrapper.style.padding = "1.1em 1.5em";
        wrapper.style.borderRadius = "5px";

        let header = document.createElement("div");
        header.style.display = "flex";
        header.style.padding = "0em 0.7em";

        let colorText = document.createElement("span");
        colorText.innerHTML = "Color";
        let percentileText = document.createElement("span");
        percentileText.innerHTML = "Percentile";
        percentileText.style.marginLeft = "1em"
      
        header.appendChild(colorText);
        header.appendChild(percentileText);

        wrapper.appendChild(header);

        let line = document.createElement("hr");
        line.style.marginBottom = 0;
        line.style.borderTop = 0;

        wrapper.appendChild(line);



        // loop through our density intervals and generate a label with a colored square for each interval
        for (let i = 0; i < grades.length; i++) {
          let row = document.createElement("div");
          row.style.display = "flex";
          row.style.padding = "0.6em 0.5em 0em 0.5em";

          let color = document.createElement("div");
          color.style.background = getColor(grades[i]);
          color.style.height = '1.25em';
          color.style.width = '1.25em';
          color.style.borderRadius = "100%";
          color.style.marginLeft = "1em"


          let text = document.createElement("div");
          text.style.marginLeft = "1.5em"
          text.innerHTML = grades[i] + '%';

          row.appendChild(color);
          row.appendChild(text);


          wrapper.appendChild(row);
        }
        return wrapper;
      };

      legend.addTo(map);
    }
  }, [map]); //here add map
  return null;
}

export default Legend
