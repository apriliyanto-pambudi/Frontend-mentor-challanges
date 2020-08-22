const projects = [
  {
    name: "four-card-feature-section-master",
    github: "https://github.com/apriliyanto-pambudi/frontend-mentor-challanges",
  },
  {
    name: "base-apparel-coming-soon-master",
    github:
      "https://github.com/apriliyanto-pambudi/frontend-mentor-challanges/tree/master/base-apparel-coming-soon-master",
  },
  {
    name: "intro-component-with-signup-form-master",
    github: "https://github.com/apriliyanto-pambudi/frontend-mentor-challanges",
  },
  {
    name: "single-price-grid-component-master",
    github:
      "https://github.com/apriliyanto-pambudi/frontend-mentor-challanges/tree/master/single-price-grid-component-master",
  },
  {
    name: "ping-coming-soon-page-master",
    github:
      "https://github.com/apriliyanto-pambudi/frontend-mentor-challanges/tree/master/ping-coming-soon-page-master",
  },
  //   {
  //     name: "huddle-landing-page",
  //     youtube:
  //       "https://www.youtube.com/watch?v=wnb-BfjR-oo&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=7&t=0s",
  //   },
  {
    name: "huddle-simple-landing",
    youtube:
      "https://github.com/apriliyanto-pambudi/frontend-mentor-challanges/tree/master/huddle-landing-section-master",
  },
  // {
  //   name: "fylo-landing-page",
  //   youtube:
  //     "https://www.youtube.com/watch?v=a9-Ro9rc7E4&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=9&t=0s",
  // },
  //   {
  //     name: "insure-landing-page",
  //     youtube:
  //       "https://www.youtube.com/watch?v=9HVKR_hK0nY&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=10&t=0s",
  //   },
  //   {
  //     name: "pricing-toggle-component",
  //     youtube:
  //       "https://www.youtube.com/watch?v=NBkD-O7f4Bs&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s",
  //   },
  //   {
  //     name: "tracking-info",
  //     youtube:
  //       "https://www.youtube.com/watch?v=71HM728Mul4&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s",
  //   },
  //   {
  //     name: "clipboard-landing-page",
  //     youtube:
  //       "https://www.youtube.com/watch?v=aZeKU7xoT0w&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s",
  //   },
];

const list = document.getElementById("list");

projects.forEach(({ name, github }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${github}" class="github">
				<i class="fab fa-github"></i>
			</a>
		</div>
	`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
