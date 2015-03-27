export default function() {
  // var duration = 500;

  this.transition(
    this.fromRoute('home.index'),
    this.toRoute('home.about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('home.index'),
    this.toRoute('home.schedule'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('home.index'),
    this.toRoute('home.about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('home.about'),
    this.toRoute('home.schedule'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('signup'),
    this.use('toUp')
  );

}
