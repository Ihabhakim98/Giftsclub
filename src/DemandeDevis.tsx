import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, Box, ListItemIcon } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DemandeDevis: React.FC = () => {
  return (
    <Card sx={{ border: '1px solid #ddd' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
        Sur Devis
        </Typography>
        <List>
          <ListItem>
						<ListItemIcon>
							<ArrowForwardIcon />
						</ListItemIcon>
            <ListItemText primary="Vous avez plusieurs établissements ?" />
          </ListItem>
          <ListItem>
						<ListItemIcon>
							<ArrowForwardIcon />
						</ListItemIcon>
            <ListItemText primary="Vous souhaitez un jeu sur mesure à l'effigie de votre marque ?" />
          </ListItem>
          <ListItem>
						<ListItemIcon>
							<ArrowForwardIcon />
						</ListItemIcon>
            <ListItemText primary="Vous souhaitez une intégration caisse ?" />
          </ListItem>
        </List>

        <Typography marginTop="10px" textAlign="left" fontSize="14px">
          Un devis sur mesure est nécessaire pour répondre avec précision aux besoins spécifiques de votre réseau d'établissements et assurer une intégration harmonieuse.
        </Typography>

        <Box mt={5}>
          <Button variant="outlined" color="success" fullWidth>
            Demander un Devis
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DemandeDevis;