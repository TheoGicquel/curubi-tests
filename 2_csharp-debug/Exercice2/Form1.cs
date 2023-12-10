namespace Exercice2
{
    public partial class FormExercice2 : Form
    {
        const int max = 10;
        int div = max;

        public FormExercice2()
        {
            InitializeComponent();
        }

        private void ButtonRun_Click(object sender, EventArgs e)
        {
            if(buttonRun.Text == "Start")
            {
                buttonRun.Text = "Stop";
                timerCounter.Enabled = true;
            } else
            {
                buttonRun.Text = "Start";
                timerCounter.Enabled = false;

            }
        }

        private void timerCounter_Tick(object sender, EventArgs e)
        {
            int yo;
            if(div>0 && max > 0)
            {
            yo = max / div;
            }
            Console.WriteLine(div);

            labelCounter.Text = string.Format("{0:N2}", (double)max / div);
            labelCounter.Update();
            div--;
        }
    }
}