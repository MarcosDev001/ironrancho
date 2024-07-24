document.addEventListener('DOMContentLoaded', function () {
    const avatarImage = document.querySelector('.half-image');
    const sideImage3 = document.querySelector('.side-image-3');
    const thirdImage = document.querySelector('.third-image');


    const avatarOriginalURL = 'https://ironhotel.org/avatar/Lettre/action=std&size=l&head_direction=4&direction=4&gesture=sml&dance=0&img_format=png&effect=0&frame_num=0';
    const novoAvatarURL = 'https://ironhotel.org/avatar/lettre/action=wav&size=l&head_direction=3&direction=2&gesture=sml&dance=0&img_format=png&effect=0&frame_num=0';

    // Modal
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    const modalButton = document.querySelector('.modal-button');


    thirdImage.addEventListener('click', function () {

        if (!sideImage3.classList.contains('neon-border')) {

            modal.classList.add('show');
            modal.style.display = 'block';
            return;
        }


        const avatarTempURL = avatarImage.src;


        avatarImage.src = novoAvatarURL;

        avatarImage.style.transform = 'scaleX(1)';


        setTimeout(function () {
            avatarImage.src = avatarOriginalURL;
            avatarImage.style.transform = 'scaleX(-1)';
        }, 7000);
    });


    span.onclick = function () {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }

    modalButton.onclick = function () {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }


    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
        }
    }


    sideImage3.addEventListener('click', function () {

        sideImage3.classList.add('neon-border');


        setTimeout(function () {
            sideImage3.classList.remove('neon-border');
        }, 9000);
    });
});