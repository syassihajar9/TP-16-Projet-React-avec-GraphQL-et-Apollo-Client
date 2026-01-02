import "./App.css";
import { ApolloProvider } from "@apollo/client/react";
import client from "./apollo/client";

import CreateCompte from "./components/CreateCompte";
import CompteList from "./components/CompteList";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  // Pour l'instant, on travaille sur le compte Id = 1
  // Plus tard tu pourras le rendre dynamique (sélection dans la liste des comptes)
  const selectedCompteId = 1;

  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Gestion des Comptes et Transactions
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <CreateCompte />
              <CompteList />
            </div>

            <div className="space-y-6">
              <TransactionForm compteId={selectedCompteId} />
              <TransactionList compteId={selectedCompteId} />
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
