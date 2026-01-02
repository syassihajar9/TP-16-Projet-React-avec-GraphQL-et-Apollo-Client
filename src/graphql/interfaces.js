import { TypeCompte, TypeTransaction } from "./types";

// Modèle (documentation) pour un compte
export const Compte = {
  id: "",
  solde: 0,
  dateCreation: "",
  type: TypeCompte.COURANT,
};

// Modèle (documentation) pour une transaction
export const Transaction = {
  id: "",
  type: TypeTransaction.DEPOT,
  montant: 0,
  date: "",
  compte: Compte,
};

// Statistiques de solde
export const SoldeStats = {
  count: 0,
  sum: 0,
  average: 0,
};

// Statistiques de transaction
export const TransactionStats = {
  count: 0,
  sumDepots: 0,
  sumRetraits: 0,
};

// Modèle d'envoi pour création de compte
export const CompteRequest = {
  solde: 0,
  type: TypeCompte.COURANT,
};

// Modèle d'envoi pour création de transaction
export const TransactionRequest = {
  type: TypeTransaction.DEPOT,
  montant: 0,
  compteId: "",
};
