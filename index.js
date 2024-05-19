document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("view").addEventListener("click", function() {
        document.getElementById("popupOverlay").style.display = "flex";
        setPopupContent(getMainPopupContent());
        attachEventListeners();
    });

    function hidePopup() {
        document.getElementById("popupOverlay").style.display = "none";
    }

    function getMainPopupContent() {
        return `
            <h2>Contact Vova Iakushin</h2>
            <p>Please choose way to contact:</p>
            <p id="emailParagraph">Email</p>
            <p id="phoneParagraph">Phone</p>
            <p id="socialParagraph">Social</p>
            <button id="closePopup">Close</button>
        `;
    }

    function setPopupContent(content) {
        document.getElementById("popup").innerHTML = content;
        attachEventListeners();
    }

    function handleBackButtonClick() {
        setPopupContent(getMainPopupContent());
    }

    function attachEventListeners() {
        document.getElementById("emailParagraph")?.addEventListener("click", function() {
            setPopupContent(`
                <h2>Email Vova Iakushin</h2>
                <input style="width: 100%;" type="email" class="input-field" id="userEmail" placeholder="Your Email" required />
                <textarea style="width: 100%; padding-right: 4px; margin-top: 13px; margin-bottom: 8px;" class="input-field" id="userMessage" placeholder="Your Message" required></textarea>
                <button id="sendEmailButton">Send</button>
                <button style="position: static; float: right;" id="backButton">Back</button>
            `);
        });

        document.getElementById("phoneParagraph")?.addEventListener("click", function() {
            if (window.innerWidth <= 500) {
                setPopupContent(`
                    <h2>Phone Vova Iakushin</h2>
                    <p><a style="color: white;" href="tel:+16507326750">Call me</a></p>
                    <p><a style="color: white;" href="sms:+16507326750">Text me</a></p>
                    <button style="position: static; float: center;" id="backButton">Back</button>
                `);
            }
             else {
                setPopupContent(`
                    <h2>Phone Vova Iakushin</h2>
                    <p><a style="color: white;" href="https://t.me/zipcodehouses">Text me on Telegram</a></p>
                    <button style="position: static; float: center;" id="backButton">Back</button>
                `);
            }
        });

        document.getElementById("socialParagraph")?.addEventListener("click", function() {
            setPopupContent(`
                <h2>Social Media</h2>
                <p>Connect with Vova Iakushin on social media:</p>
                <p><a style="color: white;" href="https://www.linkedin.com/in/zip-home-54a3b030a/">LinkedIn</a></p>
                <button style="position: static; float: center;" id="backButton">Back</button>
            `);
        });

        document.getElementById("sendEmailButton")?.addEventListener("click", function() {
            const userEmail = document.getElementById("userEmail").value;
            const userMessage = document.getElementById("userMessage").value;
            window.location.href = `mailto:3472592@gmail.com?subject=Contact from ${userEmail}&body=${encodeURIComponent(userMessage)}`;
        });

        document.getElementById("backButton")?.addEventListener("click", handleBackButtonClick);
        document.getElementById("closePopup")?.addEventListener("click", hidePopup);
    }
});