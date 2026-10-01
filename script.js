 // Mobile menu
        const menuToggle = document.getElementById("menuToggle");
        const navLinks = document.getElementById("navLinks");

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });


        // Close mobile menu when clicking a link
        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

            });

        });


        // Order button
        function orderProduct(productName) {

            document.getElementById("product").value = productName;

            document.getElementById("contact").scrollIntoView({
                behavior: "smooth"
            });

        }


        // Order form
        document.getElementById("orderForm").addEventListener(
            "submit",
            function(event) {

                event.preventDefault();

                const name =
                    document.getElementById("name").value;

                const product =
                    document.getElementById("product").value;

                const quantity =
                    document.getElementById("quantity").value;

                alert(
                    "Thank you, " + name +
                    "! Your order for " +
                    quantity + " " +
                    product +
                    " has been received."
                );

                this.reset();

            }
        );