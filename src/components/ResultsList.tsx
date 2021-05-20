import React from 'react';
import { makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme :Theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        margin: '0 auto'
    },
}));

interface ResultsItem {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

type ResultsListProps = {
    results: ResultsItem[] | null
}

export const ResultsList = ({ results }: ResultsListProps) => {
    const classes = useStyles();
    return (
        <List dense className={classes.root}>
            {results && results.map((resultItem: ResultsItem) => (
                <React.Fragment key={resultItem.id}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="some alt" src={resultItem.thumbnailUrl} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={resultItem.title}
                    />
                </ListItem>
                <Divider />
                </React.Fragment>)
            )}
        </List>
    );
};
