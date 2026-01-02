import { gql } from "@apollo/client";

// 🔹 Requête pour récupérer tous les comptes
export const GET_ALL_COMPTES = gql`
  query GetAllComptes {
    allComptes {
      id
      solde
      dateCreation
      type
    }
  }
`;

// 🔹 Requête pour récupérer un compte par ID
export const GET_COMPTE_BY_ID = gql`
  query GetCompteById($id: ID!) {
    compteById(id: $id) {
      id
      solde
      dateCreation
      type
    }
  }
`;

// 🔹 Calculer les statistiques globales des comptes
export const GET_TOTAL_SOLDE = gql`
  query GetTotalSolde {
    totalSolde {
      count
      sum
      average
    }
  }
`;



// 🔹 Récupérer les transactions d’un compte
export const GET_COMPTE_TRANSACTIONS = gql`
  query GetCompteTransactions($id: ID!) {
    compteTransactions(id: $id) {
      id
      type
      montant
      date
      compte {
        id
        solde
        type
      }
    }
  }
`;

// 🔹 Récupérer toutes les transactions
export const GET_ALL_TRANSACTIONS = gql`
  query GetAllTransactions {
    allTransactions {
      id
      type
      montant
      date
      compte {
        id
        solde
        type
      }
    }
  }
`;

// 🔹 Obtenir les statistiques des transactions
export const GET_TRANSACTION_STATS = gql`
  query GetTransactionStats {
    transactionStats {
      count
      sumDepots
      sumRetraits
    }
  }
`;
