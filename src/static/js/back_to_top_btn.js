const header = document.querySelector("#header");
const back_to_top_btn = document.querySelector(".back-to-top-btn");


back_to_top_btn.addEventListener("click", () => header.scrollIntoView(true));

const observer = new IntersectionObserver(scrollToTop);
observer.observe(header);


function scrollToTop(entries, observer)
{
	entries.forEach
	(
		(entry) =>
		{
			if(entry.isIntersecting)
				back_to_top_btn.classList.add("hidden");
			else
				back_to_top_btn.classList.remove("hidden");
		}
	);
}
