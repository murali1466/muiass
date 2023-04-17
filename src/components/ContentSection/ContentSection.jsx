import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Button,
  Container
} from "@mui/material";

const ContentSection = () => {
  return (
    <section>
      <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
          <CardMedia component="img" sx={{pt: '60'}} image="https://source.unsplash.com/random" alt="random"/>
            <CardContent>
              <Typography variant="h5">Heading</Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>VIEW</Button>
              <Button>EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card container="">
          <CardMedia component="img" sx={{pt: '60'}} image="https://source.unsplash.com/random" alt="random"/>
            <CardContent>
              <Typography variant="h5">Heading</Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>VIEW</Button>
              <Button>EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card container="">
          <CardMedia component="img" sx={{pt: '60'}} image="https://source.unsplash.com/random" alt="random"/>
            <CardContent>
              <Typography variant="h5">Heading</Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>VIEW</Button>
              <Button>EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card container="">
          <CardMedia component="img" sx={{pt: '60'}} image="https://source.unsplash.com/random" alt="random"/>
            <CardContent>
              <Typography variant="h5">Heading</Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>VIEW</Button>
              <Button>EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia component="img" sx={{pt: '60'}} image="https://source.unsplash.com/random" alt="random"/>
            <CardContent>
              <Typography variant="h5">Heading</Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>VIEW</Button>
              <Button>EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia component="img" sx={{pt: '60'}} image="https://source.unsplash.com/random" alt="random"/>
            <CardContent>
              <Typography variant="h5">Heading</Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>VIEW</Button>
              <Button>EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia component="img" sx={{pt: '60'}} image="https://source.unsplash.com/random" alt="random"/>
            <CardContent>
              <Typography variant="h5">Heading</Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>VIEW</Button>
              <Button>EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia component="img" sx={{pt: '60'}} image="https://source.unsplash.com/random" alt="random"/>
            <CardContent>
              <Typography variant="h5">Heading</Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>VIEW</Button>
              <Button>EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia component="img" sx={{pt: '60'}} image="https://source.unsplash.com/random" alt="random"/>
            <CardContent>
              <Typography variant="h5">Heading</Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>VIEW</Button>
              <Button>EDIT</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      </Container>
    </section>
  );
};

export default ContentSection;
