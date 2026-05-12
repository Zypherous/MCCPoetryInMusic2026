const pieces = [
  {
    "number": "01",
    "id": "the-gift",
    "title": "The Gift",
    "artist": "Hazel James",
    "url": "https://youtu.be/s8P8FOkrhI0",
    "youtube_id": "s8P8FOkrhI0",
    "thumbnail": "https://img.youtube.com/vi/s8P8FOkrhI0/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2Fs8P8FOkrhI0"
  },
  {
    "number": "02",
    "id": "too-sad-a-song",
    "title": "Too Sad A Song",
    "artist": "Sarie Teichman",
    "url": "https://youtu.be/52vCyCoxBhM",
    "youtube_id": "52vCyCoxBhM",
    "thumbnail": "https://img.youtube.com/vi/52vCyCoxBhM/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2F52vCyCoxBhM"
  },
  {
    "number": "03",
    "id": "from-hong-kong-to-chinatown",
    "title": "From Hong Kong to Chinatown",
    "artist": "Winnie Lau",
    "url": "https://youtu.be/zohS9n1lwQE",
    "youtube_id": "zohS9n1lwQE",
    "thumbnail": "https://img.youtube.com/vi/zohS9n1lwQE/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2FzohS9n1lwQE"
  },
  {
    "number": "04",
    "id": "free",
    "title": "Free",
    "artist": "Andre Maldonado",
    "url": "https://youtu.be/2Ts30qloOcM",
    "youtube_id": "2Ts30qloOcM",
    "thumbnail": "https://img.youtube.com/vi/2Ts30qloOcM/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2F2Ts30qloOcM"
  },
  {
    "number": "05",
    "id": "the-return",
    "title": "The Return",
    "artist": "Joann Chan",
    "url": "https://youtu.be/AQ7dhtJdVxA",
    "youtube_id": "AQ7dhtJdVxA",
    "thumbnail": "https://img.youtube.com/vi/AQ7dhtJdVxA/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2FAQ7dhtJdVxA"
  },
  {
    "number": "06",
    "id": "dear-titi",
    "title": "Dear Titi",
    "artist": "Monalisa Ortiz",
    "url": "https://youtu.be/xRLOLD-nPuc",
    "youtube_id": "xRLOLD-nPuc",
    "thumbnail": "https://img.youtube.com/vi/xRLOLD-nPuc/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2FxRLOLD-nPuc"
  },
  {
    "number": "07",
    "id": "its-okay",
    "title": "It’s Okay",
    "artist": "Judith Mendez-Maldonado",
    "url": "https://youtu.be/FxYOj01cwXQ",
    "youtube_id": "FxYOj01cwXQ",
    "thumbnail": "https://img.youtube.com/vi/FxYOj01cwXQ/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2FFxYOj01cwXQ"
  },
  {
    "number": "08",
    "id": "life",
    "title": "Life",
    "artist": "Bonita Fraser",
    "url": "https://youtu.be/KPrf306BY58",
    "youtube_id": "KPrf306BY58",
    "thumbnail": "https://img.youtube.com/vi/KPrf306BY58/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2FKPrf306BY58"
  },
  {
    "number": "09",
    "id": "god-was-and-is-great-to-me",
    "title": "God Was And Is Great To Me",
    "artist": "Sonia Tovar",
    "url": "https://youtu.be/G2k3Tmwco_Q",
    "youtube_id": "G2k3Tmwco_Q",
    "thumbnail": "https://img.youtube.com/vi/G2k3Tmwco_Q/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2FG2k3Tmwco_Q"
  },
  {
    "number": "10",
    "id": "shuffle-man",
    "title": "Shuffle Man",
    "artist": "Lisa Davis",
    "url": "https://youtu.be/GioSl_wvmAk",
    "youtube_id": "GioSl_wvmAk",
    "thumbnail": "https://img.youtube.com/vi/GioSl_wvmAk/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2FGioSl_wvmAk"
  },
  {
    "number": "11",
    "id": "born-after-60",
    "title": "Born After 60",
    "artist": "Rose X",
    "url": "https://youtu.be/N-qR--bp4P0",
    "youtube_id": "N-qR--bp4P0",
    "thumbnail": "https://img.youtube.com/vi/N-qR--bp4P0/hqdefault.jpg",
    "qr": "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=https%3A%2F%2Fyoutu.be%2FN-qR--bp4P0"
  }
];

const grid = document.querySelector('#grid');

function cardTemplate(piece) {
  const searchText = `${piece.title} ${piece.artist}`.toLowerCase();
  return `
    <article class="card" data-title="${escapeAttr(piece.title.toLowerCase())}" data-artist="${escapeAttr(piece.artist.toLowerCase())}" data-search="${escapeAttr(searchText)}">
      <a class="thumb-wrap" href="${piece.url}" target="_blank" rel="noopener" aria-label="Watch ${escapeAttr(piece.title)} by ${escapeAttr(piece.artist)}">
        <img class="thumb" src="${piece.thumbnail}" alt="Thumbnail for ${escapeAttr(piece.title)} by ${escapeAttr(piece.artist)}" loading="lazy" />
        <span class="play-badge" aria-hidden="true">▶</span>
      </a>
      <div class="card-body">
        <p class="eyebrow">${piece.number} · Poetry in Music</p>
        <h2>${escapeHtml(piece.title)}</h2>
        <p class="artist">${escapeHtml(piece.artist)}</p>
        <div class="actions">
          <a class="btn primary" href="${piece.url}" target="_blank" rel="noopener">Watch video</a>
          <button class="secondary" type="button" data-qr="${piece.qr}" data-title="${escapeAttr(piece.title)}" data-artist="${escapeAttr(piece.artist)}" data-link="${piece.url}">Show QR</button>
        </div>
      </div>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function escapeAttr(value) {
  return escapeHtml(value);
}

grid.innerHTML = pieces.map(cardTemplate).join('');

const search = document.querySelector('#search');
const cards = [...document.querySelectorAll('.card')];

search?.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  cards.forEach(card => {
    card.hidden = q && !card.dataset.search.includes(q);
  });
});

document.querySelector('#fullscreen')?.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
});

const dialog = document.querySelector('#qrDialog');
const qrImage = document.querySelector('#qrImage');
const qrTitle = document.querySelector('#qrTitle');
const qrArtist = document.querySelector('#qrArtist');
const qrLink = document.querySelector('#qrLink');

document.querySelectorAll('[data-qr]').forEach(btn => {
  btn.addEventListener('click', () => {
    qrImage.src = btn.dataset.qr;
    qrTitle.textContent = btn.dataset.title;
    qrArtist.textContent = btn.dataset.artist;
    qrLink.href = btn.dataset.link;
    dialog.showModal();
  });
});

document.querySelector('.close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', e => {
  if (e.target === dialog) dialog.close();
});
