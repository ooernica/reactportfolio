import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArticleIcon from '@mui/icons-material/Article';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
      <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          About Me
        </Typography>

        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <AccountTreeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Projects
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <ArticleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Resume
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
            <ConnectWithoutContactIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Contact
        </Link>
      </Breadcrumbs>

    </div>
  );
}
