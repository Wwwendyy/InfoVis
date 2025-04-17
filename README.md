# ✈️ InfoVis Assignments by Wenjun Dong

This repository presents a collection of interactive **Information Visualization** projects by **Wenjun Dong**, all themed around **airline and transportation datasets**, and implemented using modern web visualization techniques.

Hosted on [Vercel](https://vercel.com), each assignment showcases a different data interaction and storytelling approach through linked views, bar charts, scatterplots, maps, and network-style bubbles.

---

## 🔗 Live Demos

| Assignment | Description | Link |
|------------|-------------|------|
| Assignment 4 | CitiBike trip duration analysis with linked views | [View App](https://info-vis-assignment.vercel.app/assignment4_Wendy) |
| Assignment 5 | Interactive airline route explorer | [View App](https://info-vis-assignment.vercel.app/assignment5_Wendy) |
| Assignment 6 | Airline hub city visualization | [View App](https://info-vis-assignment.vercel.app/assignment6_Wendy) |

---

## 📁 Assignment Overviews

### 🚲 Assignment 4 – CitiBike Trip Duration Explorer

> _An interactive dual-view visualization exploring monthly CitiBike trip data._

- **Dataset**: CitiBike NYC trip data (start time, end time, station).
- **Left view**: A scatterplot of trip **start vs. end durations**.
- **Right view**: A bar chart showing **trip counts per start station**.
- **Linked interaction**:
  - Selecting a point in the scatterplot highlights the corresponding station in the bar chart and vice versa.
- **Technology highlights**:
  - D3.js-based brush and zoom interactions.
  - Visual emphasis using color and shape changes.
  - Dynamic filtering by **month** using a dropdown + slider.

📷 <img width="1440" alt="YWFHS" src="https://github.com/user-attachments/assets/18fc7119-195c-4670-b41a-dc6d531e433d" />
📷 <img width="1440" alt="hJhU9" src="https://github.com/user-attachments/assets/087b0c61-7f24-420d-8a8c-513bec9165d7" />


---

### 🛫 Assignment 5 – Airline Route Distribution

> _Explore the global coverage of major airlines through bar charts and flight path visualizations._

- **Dataset**: OpenFlights route + airline data.
- **Left view**: Bar chart showing the **number of routes per airline**.
- **Right view**: A **world map** plotting airline routes from a selected airline.
- **Interactions**:
  - Clicking on a bar filters the map to show routes **only for that airline**.
  - Hovering highlights specific paths and airlines.
- **Technology highlights**:
  - GeoJSON and projection handling with D3.
  - Modular filtering and chart linking logic.

📷 <img width="1440" alt="KNZf9" src="https://github.com/user-attachments/assets/34e51323-ac70-4e23-b7dd-809e3eaa00a9" />


---

### 🛩 Assignment 6 – Airline Hub City Network

> _Built upon Assignment 5, this enhanced visualization adds airline **hub city analysis** through a bubble diagram._

- **Additional view**: A **bubble chart** that visualizes **top 5 hub cities** for the selected airline.
- **Definition of hub**: Cities with the **most outbound routes** for a given airline.
- **Components**:
  - Airline bar chart (same as Assignment 5).
  - Airport route map (same as Assignment 5).
  - Bubble chart showing **hub intensity** (by route count).
- **Technology highlights**:
  - Bubble packing algorithm with scalable text and color coding.
  - Fully reactive updates across all three views.
  - Increased visual storytelling by surfacing geographic centers of airline operations.

📷 ![image](https://github.com/user-attachments/assets/4532ee31-5b73-4625-b4a7-581a27176c0a)


---

## 🧪 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/)
- **Data Viz**: [D3.js](https://d3js.org/), SVG, Canvas
- **Mapping**: D3 Geo + projection pipelines
- **Deployment**: [Vercel](https://vercel.com)

---

## 👩‍🎓 Author

**Wenjun Dong**  
Data Science Major @ NYU Shanghai  
[GitHub Profile](https://github.com/Wwwendyy)

---
