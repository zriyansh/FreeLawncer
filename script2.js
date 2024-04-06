document.addEventListener("DOMContentLoaded", function() {
    const applyBtns = document.querySelectorAll(".apply-btn");
    const postModal = document.getElementById("postModal");
    const applyModal = document.getElementById("applyModal");
    const closeBtns = document.querySelectorAll(".close");
    const postGigBtn = document.getElementById("postGigBtn");

    function showModal(modal) {
        modal.style.display = "block";
    }

    function hideModal(modal) {
        modal.style.display = "none";
    }

    applyBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            showModal(applyModal);
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            hideModal(postModal);
            hideModal(applyModal);
        });
    });

    window.addEventListener("click", function(event) {
        if (event.target == postModal) {
            hideModal(postModal);
            hideModal(applyModal);
        }
    });

    postGigBtn.addEventListener("click", function() {
        showModal(postModal);
    });

    const postForm = document.getElementById("postForm");
    postForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const company = document.getElementById("company").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        const gig = {
            title: title,
            company: company,
            description: description,
            price: price
        };
        appendGig(gig);
        hideModal(postModal);
    });

    function appendGig(gig) {
        const gigsList = document.getElementById("gigsList");
        const gigDiv = document.createElement("div");
        gigDiv.classList.add("gig");
        gigDiv.innerHTML = `
            <h5>Client: ${gig.company}</h5>
            <p>Date: 02.08.2023</p>
            <h3><b>NEW: </b>${gig.title}</h3>
            <p>${gig.description}</p>
            <h5>Rs. ${gig.price}</h5>
            <button class="apply-btn btn btn-primary">Apply for gig</button>
        `;
        gigsList.appendChild(gigDiv);
    }

    // Functionality for Modify and Delete buttons
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            // const gigDiv = event.target.parentElement.parentElement;
            // event.target.parentElement.parentElement.remove(); // Remove the gig from the list
            const gigDiv = event.target.closest(".gig");
            gigDiv.remove(); // Remove the gig's div
        }
        if (event.target.classList.contains("apply-btn")) {
            showModal(applyModal);
        }
    });

    const applyForm = document.getElementById("applyForm");
    applyForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Here you can add code to handle form submission
        // For simplicity, we're just hiding the modal
        applyModal.style.display = "none";
        alert("Application submitted successfully!");
    });
});

