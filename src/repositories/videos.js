import config from '../config';

const URL_VIDEOS = `${config.URL_BACK}/videos`;

function create(obj) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  create,
};
