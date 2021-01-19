# Convert to js if needed

return (

<div className={classes.root}>

 <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <InputLabel htmlFor="over18-select">
           Are you at least 18 years of age? (Must be over 18 to register)
           </InputLabel>
         <Controller
           control={control}
           name="over18"
           as={
             <Select id="over18" name="over18" error={!!errors.over18} helperText={errors?.over18?.message} ref={register} required>
               <MenuItem value={0}>Yes</MenuItem>
               <MenuItem value={6}>No</MenuItem>
             </Select>
           }
         />
                     <InputLabel htmlFor="experienceLevel-select">
           Experience Level
           </InputLabel>
         <Controller
           control={control}
           name="experienceLevel"
           as={
             <Select id="experienceLevel" name="experienceLevel" error={!!errors.experienceLevel} helperText={errors?.experienceLevel?.message} ref={register} required>
               <MenuItem value={0}>0-5 years</MenuItem>
               <MenuItem value={6}>6-10 years</MenuItem>
               <MenuItem value={11}>11-15 years</MenuItem>
               <MenuItem value={16}>16 +years</MenuItem>
             </Select>
           }
         />
        </Grid>
        <Grid item xs={12} sm={6}>
<Input
           ref={register}
           id="firstName"
           type="text"
           label="First Name"
           name="firstName"
           error={!!errors.firstName}
           helperText={errors?.firstName?.message}
         />
        </Grid>
        <Grid item xs={12} sm={6}>
                   <Input
           ref={register}
           id="lastName"
           type="text"
           label="Last Name"
           name="lastName"
           error={!!errors.lastName}
           helperText={errors?.lastName?.message}
         />
        </Grid>
        <Grid item xs={12} sm={6}>
         <Input
           ref={register}
           id="email"
           type="email"
           label="Email"
           name="email"
           error={!!errors.email}
           helperText={errors?.email?.message}
           required
         />
        </Grid>
<Grid item xs={12} sm={6}>
         <Input
           ref={register}
           id="phoneNumber"
           type="tel"
           label="Phone Number"
           name="phoneNumber"
           error={!!errors.phoneNumber}
           helperText={errors?.phoneNumber?.message}
         />
</Grid>
<Grid item xs={12}>
<InputLabel htmlFor="Address">
           Address
           </InputLabel>
         <Input
           ref={register}
           id="Address"
placeholder="1234 Main St"
           type="text"
           label="Address"
           name="Address"
           error={!!errors.Address}
           helperText={errors?.Address?.message}
         />
</Grid>
<Grid item xs={12}>
         <Input
           ref={register}
           id="addressAdditional"
           type="tel"
           label=""
           name="addressAdditional"
           error={!!errors.phoneNumber}
           helperText={errors?.phoneNumber?.message}
         />
</Grid>
<input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                    aria-label="address 2"></input>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
</Form>
    </div>
  );
}
