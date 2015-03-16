export default function() {
  var duration = 500;

  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('toLeft', {duration: duration}),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('pricing'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('schedule'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('about'),
    this.toRoute('pricing'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('pricing'),
    this.toRoute('schedule'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
