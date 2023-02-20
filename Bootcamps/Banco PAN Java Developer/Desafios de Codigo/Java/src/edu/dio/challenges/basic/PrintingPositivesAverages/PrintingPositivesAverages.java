package edu.dio.challenges.basic.PrintingPositivesAverages;

import java.util.Scanner;

public class PrintingPositivesAverages {
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int counter = 0;
		double mean = 0;
		
		for (int i=0; i<6; i++) {
			
			double value = scan.nextDouble();
			
			if (value > 0) {
				
				counter++;
				mean += value;
				
			}			
		}		
		
		mean = mean / counter;
		
		System.out.println(counter + " valores positivos");
		System.out.println(String.format("%.1f", mean));
		
		scan.close();
		
	}
	
}