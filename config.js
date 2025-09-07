const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8471832193:AAGp1_0PaX5CJz1WnSg4-kv2OBGJeHb7OC0',
  id: isNaN(parsedId) ? 5860308831 : parsedId // replace 12345.. with your telegram chat id
};
