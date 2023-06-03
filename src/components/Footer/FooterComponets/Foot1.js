import React from "react";

export default function Foot1() {
  return <button onClick={newWindow}>Sign in with Google</button>;
}

function newWindow() {
  const width = 550;
  const height = 600;
  const left = (window.innerWidth - width) / 2;
  const top = window.innerHeight - height + 30;

  window.open(
    "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=775316963807-ehq502r3fk5snsgd8c8l0o6da1su648c.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftalk-to-anything.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDlCZWN7MyT6n5mOvnFMnBh48lTbUpOFuCZQHJZ54oAk3weQi93ziwBPOyHLzJovqsliyeAt6foJq8HVLFKj40OlYJVXm8FN1olkgkSllz9HoI2Hb_er5nLjERGCbYDEwCXYgBxvdDduSTEBhrYVcnkWp9_A034LixfDXPz9lzhs-ESAtwjC7yaD4oohOAXYcSgJ__-MScvBN5ydZL0HG-Y1k41Mc1f_HuHTPspobBq-70ILFQXac2S71dKxJ0hOInRF5J5bn9N-WmF5323DMCD6DtBPQdD9x0uGdgmwIKZspcKU9c5qiU97Q7wUhOWTGRhLmIPIUZM&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&context_uri=https%3A%2F%2Fwww.chatpdf.com&service=lso&o2v=1&flowName=GeneralOAuthFlow",
    "smallWindow",
    `width=${width},height=${height},left=${left},top=${top}`
  );
}
