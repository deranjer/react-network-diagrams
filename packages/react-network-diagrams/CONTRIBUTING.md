# How to contribute to React Network Diagrams

In general we follow the "fork & pull" model as outlined in the
[GitHub docs](https://help.github.com/articles/using-pull-requests/).

Here are a few additional thoughts on how to make the contribution process as
painless as possible for yourself and for the developers.

1. _Communicate._ please create an GitHub issue in the appropriate GitHub
   project communicating your plans. This allows coordination -- it's possible
   someone else has ideas about this topic and it can save a lot of time if
   things are disucssed before you dive in. When you submit your pull request
   please include the issue number with the discussion relevant to this pull
   request.

2. _Work on a branch._ Work on a branch in a fork of the project code. _DO NOT
   WORK ON `master` or `develop`._

3. _Follow the style of the code._ All code must follow the style of the
   project. Please lint your code with a reasonable linting tool (eslint) using
   the .eslintrc file contained in the project.

4. _Create examples._ All new features must have appropriate examples in the
   examples directory. If you are adding a major feature you may wish to create a
   new example page. If you are adding a smaller feature you may just wish to
   augment one of the existing examples.

5. _Tests._ We currently evaluating how to test this library. In the mean time
   please be sure to check that all of the examples continue to work before
   submitting your pull request. If you have suggestions on how to build tests
   we'd love to hear them.

The [jQuery guidlines](http://contribute.jquery.org/commits-and-pull-requests/)
have some good suggestions for rectifying common Git mistakes

Once you have you are ready to share your code go ahead and follow the
instructions in the [GitHub
docs](https://help.github.com/articles/using-pull-requests/) to submit your
pull request.
