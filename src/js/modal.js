import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';
import refs from './refs';

refs.showModalBtn.addEventListener('click', showModal);
refs.showModalBtnSecond.addEventListener('click', showModal);

function showModal() {
  const instance = basicLightbox.create(
    `
<div class="modal">
  <form class="form">
    <h2 class="form-title">Request Demo</h2>
    <div class="form-content">
      <div class="form-fields">
        <div class="form-field">
          <label class="form-label" for="user-name">Name</label>
          <input
            class="form-input"
            type="text"
            name="name"
            maxlength="40"
            id="user-name"
            placeholder="Peter"
            required
          />
        </div>

        <div class="form-field">
          <label class="form-label" for="user-mail">Email</label>
          <input
            class="form-input"
            type="email"
            name="email"
             maxlength="40"
            id="user-email"
            placeholder="peter123@gmail.com"
            required
          />
        </div>

        <div class="form-field">
          <label class="form-label" for="user-web">Web</label>
          <input
            class="form-input"
            type="url"
            name="web"
            maxlength="50"
            id="user-web"
            placeholder="https://peter-parker.com"
            required
          />
        </div>
      </div>

      <div class="textarea-container">
        <label class="form-label" for="message">Message</label>
        <textarea
          class="form-textarea"
          name="message"
          rows="3"
          maxlength="150"
          id="message"
        ></textarea>
      </div>
    </div>
    <button class="form-submit-btn" type="submit">Send</button>
  </form>
</div>
`,
  );

  instance.show();
}
