import React, { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import './App.css';
import CartePrix from './CartePrix';
import DemandeDevis from './DemandeDevis';
import TabSwitcher from './TabSwitcher';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleHighlightCard = (titre: string) => {
    setHighlightedCard(titre);
  };

  return (
    <Container className='container'>
      <Typography variant="h4" align="center" gutterBottom>
          DÉCOUVREZ <span className='blue-text'>NOS OFFRES</span>
      </Typography>
      
      <Grid container spacing={1} direction="row" justifyContent="center">
        <Grid item xs={6}>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Trouvez le plan parfait pour votre entreprise parmi nos différentes options d'abonnement mensuel, trimestriel, semestriel, annuel et biennal.
          </Typography>
        </Grid>
      </Grid>
      
      <TabSwitcher selectedTab={selectedTab} onChange={handleTabChange} />
      
      <Grid container spacing={2} className='main'>
        <Grid item xs={12} sm={4}>
          <CartePrix 
            titre="Standard"
            prix={169}
            options={[
              'Accès aux jeux en version non personnalisés',
              '3 actions disponibles',
              'Sélection de l\'ordre de priorité des actions',
              'Sélection des cadeaux',
              'Choix limité de pictogrammes pour vos jeux',
              'Accès au tableau de bord pour suivre vos activités'
            ]}
            selected={highlightedCard === 'Standard'}
            onHighlight={handleHighlightCard}
          />
        </Grid>
      
        <Grid item xs={12} sm={4}>
          <CartePrix 
            titre="Premium"
            prix={199}
            options={[
              '3 actions disponibles',
              'Sélection de l\'ordre de priorité des actions',
              'Sélection des cadeaux',
              'Accès au tableau de bord pour suivre vos activités',
              'Accès aux jeux en version personnalisés',
              'Intégration de vos couleurs dans les jeux',
              'Intégration de votre logo dans les jeux',
              'Intégration vos pictogrammes dans les jeux'
            ]}
            selected={highlightedCard === 'Premium'}
            onHighlight={handleHighlightCard}
          />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <DemandeDevis />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
