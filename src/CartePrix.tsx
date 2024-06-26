import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface CartePrixProps {
  titre: string;
  prix: number;
  options: string[];
  selected?: boolean;
  onHighlight: (titre: string) => void;
}

const CartePrix: React.FC<CartePrixProps> = ({ titre, prix, options, selected, onHighlight }) => {
	const handleClick = () => {
		onHighlight(titre);
	}

  return (
		<Card sx={{ border: selected ? '2px solid #2196f3' : '1px solid #ddd' }}>
			<CardContent>
				<Typography variant="h5" gutterBottom color={selected ? 'primary' : 'inherit'}>
					{titre}
				</Typography>
				<Typography variant="h4" color={selected ? 'primary' : 'inherit'} gutterBottom fontWeight="bold">
					{prix}€
				</Typography>
				<List>
				{options.map((feature, index) => (
					<ListItem key={index}>
						<ListItemIcon>
							<CheckIcon color={selected ? 'primary' : 'inherit'} />
						</ListItemIcon>
						<ListItemText primaryTypographyProps={{fontSize: '13px'}}  primary={feature} />
					</ListItem>
				))}
				</List>
				<Box mt={5}>
					<Button variant="contained" color={selected ? 'primary' : 'secondary'} fullWidth onClick={handleClick}>
						<Typography textTransform="none">Je sélectionne cette offre</Typography>
					</Button>
				</Box>
			</CardContent>
		</Card>
  );
};

export default CartePrix;

