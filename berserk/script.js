const data = [
  {
    id: 0,
    quote:
      "Is he living his dreams in death? Or ... is death the end of dreams?",
    by: "Griffith",
  },
  {
    id: 1,
    quote:
      "If you desire one thing for so long, it's a given that you'll miss other things along the way. That's how it is… that's life.",
    by: "Godo",
  },
  {
    id: 2,
    quote: "In the end the winner is still the last man standing.",
    by: "Guts",
  },
  {
    id: 3,
    quote: "When you meet your God tell him to leave me alone.",
    by: "Guts",
  },
  {
    id: 4,
    quote:
      "Death on the battlefield comes regardless of class, royal or common. The loser must die!",
    by: "Griffith",
  },
  {
    id: 5,
    quote: "A dream...It's something you do for yourself, not for others.",
    by: "Griffith",
  },
  {
    id: 6,
    quote:
      "Whether it's good or bad, it's so unfortunate to wake up during a dream.",
    by: "Judeau",
  },
  {
    id: 7,
    quote:
      "That thing was too big to be called a sword. Too big, too thick, too heavy, and too rough, it was more like a large hunk of iron.",
    by: "Kentaro Miura",
  },
  {
    id: 8,
    quote:
      "Living for the future is more important than trying to avenge the past.",
    by: "Kentaro Miura",
  },
  {
    id: 9,
    quote:
      "I will never draw my sword for another man again, or be dangled by another mans dream. From now on, I will fight my own battles.",
    by: "Guts",
  },
  {
    id: 10,
    quote:
      "Dreams. Win or lose... I'm sure you could spend your whole life chasing one.",
    by: "Kentaro Miura",
  },
  {
    id: 11,
    quote: "It's your life. Do what you want with it.",
    by: "Kentaro Miura",
  },
  {
    id: 12,
    quote: "Hate is a place where a man, who can't stand sadness, goes.",
    by: "Kentaro Miura",
  },
];

const quote = document.querySelector("#quote");
const quotedBy = document.querySelector("#by");

let count = 0;
setInterval(() => {
  quote.innerHTML = data[count].quote;
  quotedBy.innerHTML = "- " + data[count].by;
  count++;

  if (count >= data.length) {
    count = 0;
  }
}, 10000);
