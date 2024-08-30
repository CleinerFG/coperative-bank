import { Event } from "./models/display/Event.js";
import { LoanRequest } from "./models/display/LoanRequest.js";

// --------------------------------------------------------------------------------
// Test data Home
// --------------------------------------------------------------------------------

// Home: Section Events

const apiDataEvents = [
  {
    id: 1450,
    type: 2,
    dueDate: "10/05/2024",
    value: 2200,
  },
  {
    id: 1456,
    type: 1,
    dueDate: "10/09/2024",
    value: 300,
  },
  {
    id: 15565,
    type: 2,
    dueDate: "08/07/2024",
    value: 2800,
  },
  {
    id: 515,
    type: 2,
    dueDate: "09/05/2024",
    value: 3400,
  },
  {
    id: 104,
    type: 1,
    dueDate: "10/08/2024",
    value: 200,
  },
  {
    id: 410,
    type: 2,
    dueDate: "12/07/2024",
    value: 5800,
  },
  {
    id: 4610,
    type: 1,
    dueDate: "15/08/2024",
    value: 400,
  },
];

export const eventsData = apiDataEvents.map(
  (event) => new Event(event.id, event.type, event.dueDate, event.value)
);

// --------------------------------------------------------------------------------
// Test data Loans/requests
// --------------------------------------------------------------------------------

// Loan/requests: New Loan Request

export const users = [
  {
    id: 417764,
    name: "Ace Visconti",
  },
  {
    id: 159387,
    name: "Ada Wong",
  },
  {
    id: 783100,
    name: "Adam Francis",
  },
  {
    id: 474239,
    name: "Ashley J. Williams",
  },
  {
    id: 918578,
    name: "Cheryl Mason",
  },
  {
    id: 727257,
    name: "Claudette Morel",
  },
  {
    id: 810821,
    name: "David King",
  },
  {
    id: 650515,
    name: "Detective David Tapp",
  },
  {
    id: 616073,
    name: "Dwight Fairfield",
  },
  {
    id: 479909,
    name: "Élodie Rakoto",
  },
  {
    id: 421775,
    name: "Felix Richter",
  },
  {
    id: 891925,
    name: "Feng Min",
  },
  {
    id: 774724,
    name: "Gabriel Soma",
  },
  {
    id: 484195,
    name: "Haddie Kaur",
  },
  {
    id: 117070,
    name: "Jake Park",
  },
  {
    id: 316696,
    name: "Jane Romero",
  },
  {
    id: 674494,
    name: "Jeff Johansen",
  },
  {
    id: 457473,
    name: "Jill Valentine",
  },
  {
    id: 273127,
    name: "Jonah Vasquez",
  },
  {
    id: 880008,
    name: "Kate Denson",
  },
  {
    id: 791006,
    name: "Laurie Strode",
  },
  {
    id: 156411,
    name: "Leon S. Kennedy",
  },
  {
    id: 809141,
    name: "Meg Thomas",
  },
  {
    id: 605106,
    name: "Mikaela Reid",
  },
  {
    id: 667148,
    name: "Nea Karlsson",
  },
  {
    id: 656423,
    name: "Nicolas Cage",
  },
  {
    id: 236512,
    name: "Quentin Smith",
  },
  {
    id: 654940,
    name: "Rebecca Chambers",
  },
  {
    id: 205473,
    name: "Renato Lyra",
  },
  {
    id: 209738,
    name: "Thalita Lyra",
  },
  {
    id: 262177,
    name: "The Artist",
  },
  {
    id: 554002,
    name: "The Blight",
  },
  {
    id: 693693,
    name: "The Cannibal (Leatherface)",
  },
  {
    id: 557505,
    name: "The Cenobite (Pinhead)",
  },
  {
    id: 818596,
    name: "The Clown",
  },
  {
    id: 285170,
    name: "The Deathslinger",
  },
  {
    id: 696293,
    name: "The Demogorgon",
  },
  {
    id: 955582,
    name: "The Doctor",
  },
  {
    id: 888354,
    name: "The Dredge",
  },
  {
    id: 763011,
    name: "The Executioner (Pyramid Head)",
  },
  {
    id: 784905,
    name: "The Ghost Face",
  },
  {
    id: 262748,
    name: "The Hag",
  },
  {
    id: 348009,
    name: "The Hillbilly",
  },
  {
    id: 300267,
    name: "The Huntress",
  },
  {
    id: 246545,
    name: "The Knight",
  },
  {
    id: 540585,
    name: "The Legion",
  },
  {
    id: 181390,
    name: "The Mastermind (Albert Wesker)",
  },
  {
    id: 890670,
    name: "The Nemesis",
  },
  {
    id: 572491,
    name: "The Nightmare (Freddy Krueger)",
  },
  {
    id: 782704,
    name: "The Nurse",
  },
  {
    id: 853214,
    name: "The Oni",
  },
  {
    id: 951034,
    name: "The Onryō (Sadako)",
  },
  {
    id: 125844,
    name: "The Pig",
  },
  {
    id: 731148,
    name: "The Plague",
  },
  {
    id: 380938,
    name: "The Shape (Michael Myers)",
  },
  {
    id: 541637,
    name: "The Singularity",
  },
  {
    id: 786749,
    name: "The Skull Merchant",
  },
  {
    id: 376498,
    name: "The Spirit",
  },
  {
    id: 162691,
    name: "The Trapper",
  },
  {
    id: 933982,
    name: "The Trickster",
  },
  {
    id: 676786,
    name: "The Twins",
  },
  {
    id: 124394,
    name: "The Wraith",
  },
  {
    id: 515617,
    name: "The Xenomorph (Alien)",
  },
  {
    id: 426085,
    name: "Vittorio Toscano",
  },
  {
    id: 711711,
    name: "William 'Bill' Overbeck",
  },
  {
    id: 985792,
    name: "Yoichi Asakawa",
  },
  {
    id: 191212,
    name: "Yui Kimura",
  },
  {
    id: 638997,
    name: "Yun-Jin Lee",
  },
  {
    id: 182616,
    name: "Zarina Kassir",
  },
];

// Loans/requests: Opened Requests

const apiDataOpenedRequests = [
  {
    id: 12,
    date: "23/07/2024",
    creditor: "Kate Denson",
    value: 4000,
    installments: 12,
    installmentValue: 200,
    rate: 2,
    status: 1,
    type: 1,
  },
  {
    id: 14,
    date: "03/09/2024",
    date: "23/07/2024",
    creditor: "Vitorio Toscano",
    value: 1000,
    installments: 12,
    installmentValue: 400,
    rate: 2,
    status: 2,
    type: 1,
  },
  {
    id: 15,
    date: "04/05/2024",
    creditor: "Meg Thomas",
    value: 5000,
    installments: 12,
    installmentValue: 300,
    rate: 2,
    status: 3,
    type: 1,
  },
];

export const openedRequestsData = apiDataOpenedRequests.map(
  (req) =>
    new LoanRequest(
      req.id,
      req.type,
      req.status,
      null,
      req.creditor,
      req.date,
      req.value,
      req.installments,
      req.rate,
      req.installmentValue
    )
);

// Loans/requests: Received Requests

const apiDataReceivedRequests = [
  {
    id: 20,
    date: "23/07/2024",
    debtor: "Kate Denson",
    value: 4000,
    installments: 12,
    installmentValue: 400,
    rate: 2,
    status: 1,
    type: 2,
  },
  {
    id: 18,
    date: "03/09/2024",
    debtor: "Vitorio Toscano",
    value: 1000,
    installments: 12,
    installmentValue: 400,
    rate: 2,
    status: 1,
    type: 2,
  },
];

export const receivedRequestsData = apiDataReceivedRequests.map(
  (req) =>
    new LoanRequest(
      req.id,
      req.type,
      req.status,
      req.debtor,
      null,
      req.date,
      req.value,
      req.installments,
      req.rate,
      req.installmentValue
    )
);
